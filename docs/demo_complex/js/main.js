import {
  ref,
  createApp,
} from "https://unpkg.com/vue@3.2.21/dist/vue.esm-browser.js";

/** プルダウンの一覧 */
const blendModes = [
  [{ label: "通常", data: "normal" }],
  [
    { label: "比較(暗)", data: "darken" },
    { label: "乗算", data: "multiply" },
    { label: "焼き込み", data: "color-burn" },
  ],
  [
    { label: "比較(明)", data: "lighten" },
    { label: "スクリーン", data: "screen" },
    { label: "覆い焼き", data: "color-dodge" },
  ],
  [
    { label: "オーバーレイ", data: "overlay" },
    { label: "ソフトライト", data: "soft-light" },
    { label: "ハードライト", data: "hard-light" },
  ],
  [
    { label: "差の絶対値", data: "difference" },
    { label: "除外", data: "exclusion" },
  ],
  [
    { label: "色相", data: "hue" },
    { label: "彩度", data: "saturation" },
    { label: "カラー", data: "color" },
    { label: "輝度", data: "luminosity" },
  ],
  [
    { label: "plus-lighter", data: "plus-lighter" },
    { label: "plus-darker", data: "plus-darker" },
  ],
];

const slides = [...Array(5).keys()].map((value) => `imgs/bg_${value}.jpg`);

const app = createApp({
  setup() {
    const currentBlendMode = ref("normal");
    const isLook3d = ref(false);

    const onChange = (event) => {
      currentBlendMode.value = event.target.value;
    };

    const photoIndex = ref(0);

    const onClickSlide = (index) => {
      document
        .querySelector(`.carouselCard:nth-child(${index + 1})`)
        .scrollIntoView({behavior: "smooth"});
      photoIndex.value = index;
    };

    return {
      currentBlendMode,
      isLook3d,
      blendModes,
      slides,
      onChange,
      photoIndex,
      onClickSlide,
    };
  },
});
app.mount("#app");
