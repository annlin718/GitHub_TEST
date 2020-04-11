var app = new Vue({
  el: '#divApp',
  data: {
    Product: '【中統】風度翩翩紳士襪',
    //imageURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index1-1582922741.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
    imageURL: 'https://res.cloudinary.com/bombas/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/white-layflat-product_b189eb61-1dd7-422a-942d-e61bbf826f91_1000x1000.jpg%3Fv%3D1571291727',
    inventory: 13,
    isStock: true,
    SelectIndex: 0,
    SelectColor: "尚未選擇顏色",
    PurchaseCnt: 0,
    details: [
      {
        id: "P001",
        Color: "White",
        color_HTML: "#ffffff",
        isEnd: false,
        picURL: "https://res.cloudinary.com/bombas/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/white-layflat-product_b189eb61-1dd7-422a-942d-e61bbf826f91_1000x1000.jpg%3Fv%3D1571291727"
      },
      {
        id: "P002",
        Color: "Black",
        color_HTML: "#000000",
        isEnd: false,
        picURL: "https://res.cloudinary.com/bombas/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/black-blue-layflat-product_d37c92fe-24c5-4d57-b010-d2863286ea8c_1000x1000.jpg%3Fv%3D1574360033"
      },
      {
        id: "P003",
        Color: "Gray",
        color_HTML: "#999999",
        isEnd: true,
        picURL: "https://res.cloudinary.com/bombas/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/charcoal-layflat-product_b01a4ad5-f770-434b-b66f-ef3e2bfd6790_1000x1000.jpg%3Fv%3D1571291727"
      }
    ],
    styleObject: {
      fontSize: '10px',
      Color: '#999'
    }
  },
  methods: {
    ChangeColor: function (sColor, sNo, index) {
      this.SelectColor = sNo + "-" + sColor;
      this.imageURL = this.details[index].picURL;
      this.SelectIndex = index;
    },
    addToCart: function () {
      this.PurchaseCnt++;
      this.inventory--;

      if (this.inventory == 0) {
        this.isStock = false;
      }
    }
  },
  computed: {
    title: function () {
      return this.inventory;
    }
  }
})
