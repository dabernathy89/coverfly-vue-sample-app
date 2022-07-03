import { mount, flushPromises } from '@vue/test-utils';
import { vi } from 'vitest';
import App from '../src/App.vue';
import calculatorService from '../src/calculatorService';
import { createTestingPinia } from '@pinia/testing';

const timestamp = new Date(1656850173381);
vi.spyOn(calculatorService, 'calculate').mockResolvedValue({
  datetime: timestamp,
  value: 2640,
  number: 10,
  occurrences: 1,
  last_datetime: timestamp,
});

test('mount component', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createTestingPinia({ stubActions: false })],
    },
  });

  expect(wrapper.text()).toContain('Provide your input number here');
  expect(wrapper.text()).toContain('Output');
  expect(wrapper.text()).toContain('Runs');
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.get('input[type=number]').text('10');
  await wrapper.get('form').trigger('submit');
  await flushPromises();

  expect(wrapper.text()).toContain('2640');
  expect(wrapper.html()).toMatchSnapshot();
});