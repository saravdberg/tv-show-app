import { shallowMount } from "@vue/test-utils";
import ShowCard from "@/components/ShowCard.vue";

describe("ShowCard component", () => {
  it("renders the year in the showcard correctly", () => {
    // render the component with mock data
    const wrapper = shallowMount(ShowCard, {
      propsData: {
        title: "Dancing with the Stars",
        image: "",
        year: "2005",
      },
    });

    // check if the year is displayed correctly
    expect(wrapper.find(".year").text()).toMatch("2005");
  });
});
