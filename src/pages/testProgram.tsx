import Content from "../components/Content"

const TestProgram = () => {
  return (
    <>
      <section className='p-10 bg-gray-100'>
        {/* title */}
        <h1 className='text-4xl font-bold text-center'>細かいプログラム</h1>
      </section>
      <section className='p-10 bg-white-100'>
        {/* contents */}

        <Content title='ReactでFCMを利用するための検証用リポジトリ' link='https://github.com/k22036/fcm-test-react'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            React, Firebase
          </ul>
          <p className='mb-4'>
            Firebase Cloud Messaging(FCM)をReactで利用するための検証用リポジトリである．
            FCMは，Firebaseのサービスの一つで，プッシュ通知を送ることができる．
            今回はwebブラウザへのプッシュ通知を対象としている．
          </p>
          <p className='mb-4'>
            公式のドキュメントではhtmlとtsを使ったサンプルがあるが，Reactで使う場合のサンプルがなかったため，作成した．
            基本的には，公式のドキュメントをReactに書き直したものである．
            Firebaseにデプロイする検証まで行った．
          </p>
        </Content>

        <Content title='ReactをGitHub Pagesにデプロイするための検証用リポジトリ' link='https://github.com/k22036/react-gh-pages-test'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>React</li>
          </ul>
          <p className='mb-4'>
            ReactのプロジェクトをGitHub Pagesにデプロイするための検証用リポジトリである．
            mainブランチにpushすると，GitHub Actionsが走り，gh-pagesブランチにビルドされたファイルがpushされる．
            その後，GitHub Pagesに反映される．
          </p>
          <p className='mb-4'>
            このポートフォリオサイトも，Reactで書かれており，GitHub Pagesにデプロイしている．
          </p>
        </Content>

        <Content title='MongoDBの検証用リポジトリ' link='https://github.com/k22036/MongoDB-test'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
          </ul>
          <p className='mb-4'>
            MongoDBの環境を構築し，pythonからデータの追加等ができるかの検証用リポジトリである．
            また，Ubuntuで動作するかの検証も行いたかったため，Dockerを使用している．
            Docker上で，MongoDBの環境を構築し，pythonからデータの追加等ができるかの検証を行った．
          </p>
        </Content>

        <Content title='iosからサーバーの認証を利用できるかの検証用リポジトリ' link='https://github.com/k22036/ios-auth-test'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python, Swift</li>
            <li>フレームワーク: Flask</li>
          </ul>
          <p className='mb-4'>
            サーバー側では，signupのみ実装している．
            認証には，Firebase Authenticationを使用している．
            ios側では，signupができるようなUIのみ準備しており，正しくsignupできるかの検証を行った．
          </p>
        </Content>

      </section>
    </>
  )
}

export default TestProgram