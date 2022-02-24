import Link from 'next/link'
import Layout from '../components/Layout'
import Product from '../components/Product'
import Slider from '../components/Slider'

const IndexPage = () => (
  <Layout title="Sneakers">
    <main className="max-w-6xl xl:mx-auto mx-8 ">
      <div className="flex">
        <div className="bg-white mt-16 bg-opacity-60 backdrop-blur flex max-w-sm absolute z-40">
          <h1 className="text-6xl sm:text-7xl font-bold ">The bests shoes to your style</h1>
        </div>
        <Slider />
      </div>
    </main>
    <section id="top-rated" className="mt-36 max-w-6xl mx-8 xl:mx-auto">
      <h2 className="text-6xl font-bold">TOP RATED</h2>
      <p className="font-bold text-2xl opacity-80 font-montserrat">
        The most rated products from our customers
      </p>
      <div className="mt-8 flex gap-2 flex-wrap xl:gap-3">
        <Product
          name="Nike Air Pegasus 38"
          price="899,99"
          image="https://images.lojanike.com.br/860x860/produto/tenis-nike-air-zoom-pegasus-38-masculino-CW7356-002-1.jpg"
        />
        <Product
          name="Adiddas Forum Low"
          price="599,99"
          image="https://authenticfeet.vteximg.com.br/arquivos/ids/243763-1000-1000/Tenis-adidas-Forum-Low-Masculino-Branco.jpg?v=637610876740570000"
        />
        <Product
          name="Puma RS-X INTERNATIONAL GAME"
          price="239,99"
          image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/381821/02/sv01/fnd/BRA/w/320/h/320/fmt/png"
        />
        <Product
          name="Mizuno Wave Prophecy X WK"
          price="1119,99"
          promotion={true}
          oldPrice="1479,99"
          image="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-x-wk-masculino/64/D16-7710-064/D16-7710-064_zoom1.jpg?ts=1612440054"
        />
      </div>
    </section>
    <section id="other-products" className="mt-24 max-w-6xl mx-8 xl:mx-auto">
      <h2 className="text-6xl font-bold">OTHER PRODUCTS</h2>
      <div className="mt-8 flex gap-3 flex-wrap	">
        <Product
          name="Nike Air Max"
          price="559,99"
          promotion={true}
          oldPrice="659,99"
          image="https://images.lojanike.com.br/1024x1024/produto/tenis-air-max-90-DB0625-001-1-11622138243.jpg"
        />
        <Product
          name="Nike Air Jordan"
          price="899,99"
          image="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-jordan-i-mid-unissex-554724-061-1.png"
        />
        <Product
          name="Brooks Glycerin 19"
          price="559,99"
          promotion={true}
          oldPrice="799,99"
          image="https://imgcentauro-a.akamaihd.net/900x900/95357202A4/tenis-brooks-glycerin-19-masculino-img.jpg"
        />
        <Product
          name="Nike New Balance 5740"
          price="699"
          image="https://newbalance.vtexassets.com/arquivos/ids/226902-1200-auto?v=637563376348070000&width=1200&height=auto&aspect=true"
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
