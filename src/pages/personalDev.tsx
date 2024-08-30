import Content from '../components/Content'
import chatHomeImg from '../images/chat-app-home.png'
import chatAppImg from '../images/chat-app.png'
import checkRoomHomeImg from '../images/check-room-home.png'
import checkRoomImg from '../images/check-room-page.png'
import showReposImg from '../images/show-repos.png'
import pdfSplitImg from '../images/split-pdf.png'

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
            サクッと作成できたが，よくわからない文字をパースするのが少し大変でした．
          </p>
          <img src={checkRoomHomeImg} alt='check-room-home' className='object-cover mb-4' />
          <img src={checkRoomImg} alt='check-room' className='object-cover mb-4' />
        </Content>

        <Content title='GitHubのpublicなリポジトリを確認できるアプリケーション' link='https://github.com/k22036/show-repos'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>Next.js</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，GitHubのpublicなリポジトリを確認できるアプリケーションである．
            標準では私自身のリポジトリが表示されるようになっている．
            他のユーザーのリポジトリを確認したい場合は，プログラムを変更する必要がある．
          </p>
          <p className='mb-4'>
            表示しているデータは，octokitを使って取得している．
            アプリケーションを使うためには，GitHubのトークンが必要である．
          </p>
          <img src={showReposImg} alt='show-repositories' className='object-cover mb-4' />
        </Content>

        <Content title='PDFの結合，抽出ができるアプリケーション' link='非公開'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，複数のPDFファイルを結合したり，PDFファイルから選択したページを抽出することができる．
            PDFの結合，抽出の処理はサーバーで行われ，PDFのデータはバイナリとして，データベースに保存される．
          </p>
          <p className='mb-4'>
            苦労した点は，PDFをwebアプリケーション上でプレビューとして表示することである．
            結合の際は，ファイル名を並べ替え可能とし，抽出の際は，ページを選択できるようにした．
            また，ファイルをアップロードすると，そのファイルがデータベースに保存される仕様のため，
            後に，処理をする際にデータベースから取得してから処理をする必要がある．
            そのため，データベースからデータを取得し，メモリ上にデータを展開してから，処理を行なっている．
          </p>
          <img src={pdfSplitImg} alt='pdf-split' className='object-cover mb-4' />
        </Content>

      </section>
    </>
  )
}

export default PersonalDev