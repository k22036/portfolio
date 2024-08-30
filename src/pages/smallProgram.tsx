import Content from "../components/Content"
import calcSumImg from '../images/calc-sum-form.png'

const SmallProgram = () => {
  return (
    <>
      <section className='p-10 bg-gray-100'>
        {/* title */}
        <h1 className='text-4xl font-bold text-center'>細かいプログラム</h1>
      </section>
      <section className='p-10 bg-white-100'>
        {/* contents */}

        <Content title='選択項目のvalueの合計を表示するプログラム' link='https://github.com/k22036/calc-sum-form'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: JavaScript</li>
          </ul>
          <p className='mb-4'>
            選択項目のvalueの値の和を動的にリアルタイムに計算して表示するプログラムである．
            質問，選択肢はhtmlのフォーマットに従っていれば，要素を追加するだけで動く．
          </p>
          <p className='mb-4'>
            このプログラムは，GitHub Pagesを使ってデプロイしている．
            GitHub Pagesが便利であることを知った．
            また，JavaScriptはjQueryを使っている．
          </p>
          <img src={calcSumImg} alt='form-img' className='object-cover mb-4' />
        </Content>

        <Content title='郵便番号から住所を表示するwebアプリケーション' link='https://github.com/k22036/zipcode_to_address'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
          </ul>
          <p className='mb-4'>
            郵便番号を入力すると，その郵便番号に対応する住所を表示するwebアプリケーションである．
            住所は，外部APIを使って取得している．
            また，その住所周辺のgoogle mapへのリンクも表示している．
          </p>
        </Content>

        <Content title='シーザー暗号をCBCモードで暗号化，復号できるプログラム' link='https://github.com/k22036/cipher'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
          </ul>
          <p className='mb-4'>
            シーザー暗号をCBCモードで暗号化，復号できるプログラムである．
            CBCモードでは，暗号化の際に，前のブロックの暗号文ブロックと平文ブロックをXOR演算してから暗号化を行う．
            これにより，同じ平文ブロックでも異なる暗号文ブロックが生成される．
          </p>
        </Content>

      </section>
    </>
  )
}

export default SmallProgram