import Content from "../components/Content"
import deadlineTrackerImg from '../images/deadline-tracker.png'
import nifupotiImg from '../images/nifupoti.png'

const TeamDev = () => {
  return (
    <>
      <section className='p-10 bg-gray-100'>
        {/* title */}
        <h1 className='text-4xl font-bold text-center'>チーム開発</h1>
      </section>
      <section className='p-10 bg-white-100'>
        {/* contents */}

        <Content title='簡単な操作で利用できるプラン提案アプリケーション' link='非公開'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
            <li>データベース: Mysql</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，自分に合ったプランを見つけたい人向けのアプリケーションである．
            サービス名は，ニフティぽちぽち（ニフぽち）である．
            カジュアルに質問形式で選択していくことによって，自分に合ったプランを提案してくれる．
          </p>
          <p className='mb-4'>
            私は，機能としては住んでいる地域の選択画面を作成しました．
            日本地図上に，都道府県を表示し，選択することができるようにしました．
            また，ルーティングのベースと，テンプレートのベースを作成しました．
            初期の段階で，作成できたので，その先の機能が効率よく追加できたのかなと思っています．
          </p>
          <p className='mb-4'>
            チーム内では技術的なサポートなどを行いました．
            また，コードの管理もしていました．
            しかし，コードの管理がうまくいかなかったため，最終的には，ブランチをマージしていく作業がとても大変でした．
            そのため，スパゲッティブランチと社員の方から言われました．
            ここから学んだことは，機能ごとに細かく分割して，プッシュすることが大切であることを学びました．
          </p>
          <img src={nifupotiImg} alt='chat-home' className='object-cover mb-4' />
        </Content>

        <Content title='課題の管理ができるアプリケーション' link='https://github.com/2023AIT-OOP2-G02/Deadline_Memo_web_app'>
          <p className='mb-4'>使用技術</p>
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，大学の授業の自由課題としてチームで開発しました．
            課題の詳細情報がメモできるだけではなく，締切日を設定することができます．
            締切日はカウントダウンで表示され，締切日までの残り時間によって色が変わり視覚的にもわかりやすくなっています．
            さらに，締切時間が近づくとweb通知が行われます．
          </p>
          <p className='mb-4'>
            私は，バックエンドを担当しました．
            データベース周りを実装し，簡単にデータベースを扱えるように，データベースの操作を行うクラスを作成しました．
            データベースは，SQLiteを使用しており，ORMとして，SQLAlchemyを使用しています．
            他には，課題の検索，並び替えの機能を実装しました．
          </p>
          <p className='mb-4'>
            もし，機能を追加するならば，ログイン機能，課題の共有機能を追加したいと考えています．
            また，変にリダイレクトしたりと，無駄な実装の部分があるため，修正したいと考えています．
          </p>
          <img src={deadlineTrackerImg} alt='check-room-home' className='object-cover mb-4' />
        </Content>

        <Content title='すれ違い通信ができるサービス（開発中）' link='https://github.com/nanocom2024/nanoRelation_Server'>
          <p className='mb-4'>使用技術</p>
          ・クラウド
          <ul className='mb-4'>
            <li>言語: python</li>
            <li>フレームワーク: Flask</li>
            <li>データベース: MongoDB</li>
          </ul>
          <p className='mb-4'>
            このアプリケーションは，すれ違い通信を実現するために開発中である．
            すれ違い通信と共に，迷子の検知も行う予定である．
            このサービスは，クラウド，クライアント，デバイスの3つの要素で構成されている．
            クラウドは，ユーザーの認証やデータの検証，保存を行う．
            クライアントは，iosのアプリケーションを想定しており，ユーザーがアプリケーションの設定を行なったり，情報の確認を行える．
            デバイスは，ビーコンを出して，ユーザーの位置を知らせる．
          </p>
          <p className='mb-4'>
            私は，主にクラウドを担当しています．
            データベース周り，認証周り，アプリケーション処理周りを実装しています．
            認証には，Firebase Authenticationを使用しています．
          </p>
        </Content>

        <Content title='情報流の考え方を用いたシステム（研究）' link='非公開'>
          <p className='mb-4'>使用技術</p>
          ・クラウド
          <p className='mb-4'>
            Go, Next.js, Firebase, Dockerなど
          </p>
          <p className='mb-4'>
          私が所属している研究室では，情報流の考え方を利用したシステムを開発しています．
          情報流とは，従来のクラウドコンピューティング，エッジコンピューティングとは異なり，
          IoTデバイスから生成される情報を即時に流通させて利用するというものである．
          </p>
          <p className='mb-4'>
          本システムは，IoTデバイスから生成される情報を，他のデバイスにリアルタイムで共有し，利用できるようにするものである．
          ユーザーは，流通している情報を活用し，新たな価値を生み出すことができる．
          また，GUIによる簡単な操作で，ユーザーがサービスを構築できる．
          </p>
          <p className='mb-4'>
          私自身は，開発に参加し始めたばかりなので，バグ修正などをメインに行なっています．
          また，並行して，システムの理解，技術のキャッチアップなども行なっています．
          </p>
        </Content>

      </section>
    </>
  )
}

export default TeamDev