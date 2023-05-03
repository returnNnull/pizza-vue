<template>
  <footer>
    <ul>
      <li><a href="">Pizza</a></li>
      <li><a href="">О нас</a></li>
      <li><a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%86%D1%86%D0%B0#:~:text=%D0%9F%D1%80%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%BC%20%D0%BF%D0%B8%D1%86%D1%86%D1%8B%20%D0%B1%D1%8B%D0%BB%D0%B8%20%D0%BD%D0%B5%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5%20%D0%BA%D1%83%D1%88%D0%B0%D0%BD%D0%B8%D1%8F,%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D0%BF%D0%B8%D1%86%D1%86%D1%83%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D1%82%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D1%85%20%D0%BA%D1%80%D0%B5%D1%81%D1%82%D1%8C%D1%8F%D0%BD.">История пиццы</a></li>
      <li><a href="">Блог</a></li>
      <li><a href=""></a></li>
    </ul>

    <ul>
      <li><a href="#">Каталог</a></li>
      <li><a href="#pizza-section">Пицца</a></li>
      <li><a href="#snacks-section">Закуски</a></li>
      <li><a href="#sugar-section">Десерты</a></li>
      <li><a href="#drink-section">Напитки</a></li>
    </ul>

    <ul>
      <li><a href="#">Телефон: +7 937 128 15 52</a></li>
    </ul>


  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

.bi-telegram {
  color: var(--grey);
}

footer{
  background: var(--black);
  display: flex;
  justify-content: space-evenly;
  padding: var(--padding-standart);
}


footer ul li:first-child{
  font-weight: bold;
}

</style>