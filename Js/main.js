const url = "http://voodoo-sandbox.myshopify.com/products.json?limit=12";

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Проверка на успешный ответ и наличие продуктов
    if (data && data.products && data.products.length > 9) {
      const firstProduct = data.products[0];
      const secondProduct = data.products[1];
      const thirdProduct = data.products[2];
      const fourthProduct = data.products[3];
      const fifthProduct = data.products[4];
      const sixthProduct = data.products[5];
      const seventhProduct = data.products[6];
      const eighthProduct = data.products[7];
      const ninthProduct = data.products[8];
      const tenthProduct = data.products[9];
      const eleventhProduct = data.products[10];
      const twelfthProduct = data.products[11];

      // Вывод информации о первом продукте
      if (firstProduct.images && firstProduct.images.length > 0) {
        const firstImageSrc = firstProduct.images[0].src;
        const firstImageElement = document.createElement("img");
        firstImageElement.src = firstImageSrc;
        const firstImageContainer = document.getElementById("first-image-container");
        firstImageContainer.appendChild(firstImageElement);
      } else {
        console.log("У первого продукта нет изображений");
      }
      const firstTitleElement = document.getElementById("first-title");
      firstTitleElement.textContent = firstProduct.title;
      const firstPriceElement = document.getElementById("first-price");
      firstPriceElement.textContent = "Price: " + firstProduct.price;

      // Вывод информации о втором продукте
      if (secondProduct.images && secondProduct.images.length > 0) {
        const secondImageSrc = secondProduct.images[0].src;
        const secondImageElement = document.createElement("img");
        secondImageElement.src = secondImageSrc;
        const secondImageContainer = document.getElementById("second-image-container");
        secondImageContainer.appendChild(secondImageElement);
      } else {
        console.log("У второго продукта нет изображений");
      }
      const secondTitleElement = document.getElementById("second-title");
      secondTitleElement.textContent = secondProduct.title;
      const secondPriceElement = document.getElementById("second-price");
      secondPriceElement.textContent = "Price: " + secondProduct.price;

      // Вывод информации о третьем продукте
      if (thirdProduct.images && thirdProduct.images.length > 0) {
        const thirdImageSrc = thirdProduct.images[0].src;
        const thirdImageElement = document.createElement("img");
        thirdImageElement.src = thirdImageSrc;
        const thirdImageContainer = document.getElementById("third-image-container");
        thirdImageContainer.appendChild(thirdImageElement);
      } else {
        console.log("У третьего продукта нет изображений");
      }
      const thirdTitleElement = document.getElementById("third-title");
      thirdTitleElement.textContent = thirdProduct.title;
      const thirdPriceElement = document.getElementById("third-price");
      thirdPriceElement.textContent = "Price: " + thirdProduct.price;

      // Вывод информации о четвертом продукте
      if (fourthProduct.images && fourthProduct.images.length > 0) {
        const fourthImageSrc = fourthProduct.images[0].src;
        const fourthImageElement = document.createElement("img");
        fourthImageElement.src = fourthImageSrc;
        const fourthImageContainer = document.getElementById("fourth-image-container");
        fourthImageContainer.appendChild(fourthImageElement);
      } else {
        console.log("У четвертого продукта нет изображений");
      }
      const fourthTitleElement = document.getElementById("fourth-title");
      fourthTitleElement.textContent = fourthProduct.title;
      const fourthPriceElement = document.getElementById("fourth-price");
      fourthPriceElement.textContent = "Price: " + fourthProduct.price;

      // Вывод информации о пятом продукте
      if (fifthProduct.images && fifthProduct.images.length > 0) {
        const fifthImageSrc = fifthProduct.images[0].src;
        const fifthImageElement = document.createElement("img");
        fifthImageElement.src = fifthImageSrc;
        const fifthImageContainer = document.getElementById("fifth-image-container");
        fifthImageContainer.appendChild(fifthImageElement);
      } else {
        console.log("У пятого продукта нет изображений");
      }
      const fifthTitleElement = document.getElementById("fifth-title");
      fifthTitleElement.textContent = fifthProduct.title;
      const fifthPriceElement = document.getElementById("fifth-price");
      fifthPriceElement.textContent = "Price: " + fifthProduct.price;

      // Вывод информации о шестом продукте
      if (sixthProduct.images && sixthProduct.images.length > 0) {
        const sixthImageSrc = sixthProduct.images[0].src;
        const sixthImageElement = document.createElement("img");
        sixthImageElement.src = sixthImageSrc;
        const sixthImageContainer = document.getElementById("sixth-image-container");
        sixthImageContainer.appendChild(sixthImageElement);
      } else {
        console.log("У шестого продукта нет изображений");
      }
      const sixthTitleElement = document.getElementById("sixth-title");
      sixthTitleElement.textContent = sixthProduct.title;
      const sixthPriceElement = document.getElementById("sixth-price");
      sixthPriceElement.textContent = "Price: " + sixthProduct.price;

      // Вывод информации о седьмом продукте
      if (seventhProduct.images && seventhProduct.images.length > 0) {
        const seventhImageSrc = seventhProduct.images[0].src;
        const seventhImageElement = document.createElement("img");
        seventhImageElement.src = seventhImageSrc;
        const seventhImageContainer = document.getElementById("seventh-image-container");
        seventhImageContainer.appendChild(seventhImageElement);
      } else {
        console.log("У седьмого продукта нет изображений");
      }
      const seventhTitleElement = document.getElementById("seventh-title");
      seventhTitleElement.textContent = seventhProduct.title;
      const seventhPriceElement = document.getElementById("seventh-price");
      seventhPriceElement.textContent = "Price: " + seventhProduct.price;

      // Вывод информации о восьмом продукте
      if (eighthProduct.images && eighthProduct.images.length > 0) {
        const eighthImageSrc = eighthProduct.images[0].src;
        const eighthImageElement = document.createElement("img");
        eighthImageElement.src = eighthImageSrc;
        const eighthImageContainer = document.getElementById("eighth-image-container");
        eighthImageContainer.appendChild(eighthImageElement);
      } else {
        console.log("У восьмого продукта нет изображений");
      }
      const eighthTitleElement = document.getElementById("eighth-title");
      eighthTitleElement.textContent = eighthProduct.title;
      const eighthPriceElement = document.getElementById("eighth-price");
      eighthPriceElement.textContent = "Price: " + eighthProduct.price;

      // Вывод информации о девятом продукте
      if (ninthProduct.images && ninthProduct.images.length > 0) {
        const ninthImageSrc = ninthProduct.images[0].src;
        const ninthImageElement = document.createElement("img");
        ninthImageElement.src = ninthImageSrc;
        const ninthImageContainer = document.getElementById("ninth-image-container");
        ninthImageContainer.appendChild(ninthImageElement);
      } else {
        console.log("У девятого продукта нет изображений");
      }
      const ninthTitleElement = document.getElementById("ninth-title");
      ninthTitleElement.textContent = ninthProduct.title;
      const ninthPriceElement = document.getElementById("ninth-price");
      ninthPriceElement.textContent = "Price: " + ninthProduct.price;

      // Вывод информации о десятом продукте
      if (tenthProduct.images && tenthProduct.images.length > 0) {
        const tenthImageSrc = tenthProduct.images[0].src;
        const tenthImageElement = document.createElement("img");
        tenthImageElement.src = tenthImageSrc;
        const tenthImageContainer = document.getElementById("tenth-image-container");
        tenthImageContainer.appendChild(tenthImageElement);
      } else {
        console.log("У десятого продукта нет изображений");
      }
      const tenthTitleElement = document.getElementById("tenth-title");
      tenthTitleElement.textContent = tenthProduct.title;
      const tenthPriceElement = document.getElementById("tenth-price");
      tenthPriceElement.textContent = "Price: " + tenthProduct.price;

      // Вывод информации об одиннадцатом продукте
      if (eleventhProduct.images && eleventhProduct.images.length > 0) {
        const eleventhImageSrc = eleventhProduct.images[0].src;
        const eleventhImageElement = document.createElement("img");
        eleventhImageElement.src = eleventhImageSrc;
        const eleventhImageContainer = document.getElementById("eleventh-image-container");
        eleventhImageContainer.appendChild(eleventhImageElement);
      } else {
        console.log("У одиннадцатого продукта нет изображений");
      }
      const eleventhTitleElement = document.getElementById("eleventh-title");
      eleventhTitleElement.textContent = eleventhProduct.title;
      const eleventhPriceElement = document.getElementById("eleventh-price");
      eleventhPriceElement.textContent = "Price: " + eleventhProduct.price;

      // Вывод информации о двенадцатом продукте
      if (twelfthProduct.images && twelfthProduct.images.length > 0) {
        const twelfthImageSrc = twelfthProduct.images[0].src;
        const twelfthImageElement = document.createElement("img");
        twelfthImageElement.src = twelfthImageSrc;
        const twelfthImageContainer = document.getElementById("twelfth-image-container");
        twelfthImageContainer.appendChild(twelfthImageElement);
      } else {
        console.log("У двенадцатого продукта нет изображений");
      }
      const twelfthTitleElement = document.getElementById("twelfth-title");
      twelfthTitleElement.textContent = twelfthProduct.title;
      const twelfthPriceElement = document.getElementById("twelfth-price");
      twelfthPriceElement.textContent = "Price: " + twelfthProduct.price;

    } else {
      console.log("Произошла ошибка при получении данных или продукты не найдены");
    }

  })
  .catch(error => {
    console.log("Произошла ошибка:", error);
  });
