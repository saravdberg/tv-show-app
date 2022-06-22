import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/Hero.vue";

describe("Hero component", () => {
  it("renders the component when it is created", () => {
    // render the component with an empty string
    const wrapper = shallowMount(Hero, {
      propsData: {
        search: "",
      },
    });

    // check if it has the correct name
    expect(wrapper.vm.$options.name).toMatch("Hero");
  });

  it("inputs the search string into the input", () => {
    // render the component with a search term
    const wrapper = shallowMount(Hero, {
      propsData: {
        search: "Homeland",
      },
    });

    // check if the search prop is present in the input element value
    expect(wrapper.find("input").element.value).toMatch("Homeland");
  });
});
