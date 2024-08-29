import Content from '../components/Content'
import chatHomeImg from '../images/chat-app-home.png'
import chatAppImg from '../images/chat-app.png'
import checkRoomHomeImg from '../images/check-room-home.png'
import checkRoomImg from '../images/check-room-page.png'

const PersonalDev = () => {
  return (
    <>
      <section className='p-10 bg-gray-100'>
        {/* title */}
        <h1 className='text-4xl font-bold text-center'>個人開発</h1>
      </section>
      <section className='p-10 bg-white-100'>
        {/* contents */}

        <Content title='チャットアプリケーション' link='https://github.com/k22036/final-chat-app'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: PHP</li>
            <li>フレームワーク: Laravel</li>
            <li>データベース: Supabase</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，実際に複数人でチャットすることができる．
            ユーザーは新規登録をすることにより，アプリケーションを利用することができる．
            認証周りは，Laravel Breezeを用いて実装している．<br />
            PHP, Laravel, Supabaseを使用した理由は，どれも触ったことがなく使ってみたかったからである．
          </p>
          <p className='mb-4'>
            データベースは，主に，ユーザーテーブル，ルームテーブル，ルーム管理テーブルがある．
            ルームテーブルは，チャットの内容を保存している．
            ルーム管理テーブルは，そのテーブルに所属しているユーザーの管理，最終更新時間の管理をしている．
          </p>
          <p className='mb-4'>
            このアプリケーション全体としては，MVCの考え方を取り入れている．
            本格的に，MVCを採用するのが初めてであったため，自分なりに考えクラス分割を行った．
          </p>
          <img src={chatHomeImg} alt='chat-home' className='object-cover mb-4' />
          <img src={chatAppImg} alt='chat-app' className='object-cover mb-4' />
        </Content>

        <Content title='教室の使用状況を確認できるアプリケーション' link='https://github.com/k22036/check-used-room'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>Next.js</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，vercelを使ってデプロイしている．
            教室の使用状況を確認できるアプリケーションである．
            大学に残って，勉強等がしたい時に，空いている教室がわかると便利なため作成した．
          </p>
          <p className='mb-4'>
            データは，pythonでシラバスからスクレイピングした．
            そのデータは，json形式で保存している．
          </p>
          <p className='mb-4'>
            サクッと作成できたが，よくわからない文字をパースするのが少し大変だった．
          </p>
          <img src={checkRoomHomeImg} alt='check-room-home' className='object-cover mb-4' />
          <img src={checkRoomImg} alt='check-room' className='object-cover mb-4' />
        </Content>
      </section>
    </>
  )
}

export default PersonalDev