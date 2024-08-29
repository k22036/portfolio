import { Link } from 'react-router-dom';

const projects = [
  { title: '個人開発', description: '個人で開発したもの', link: '/personal-dev' },
  { title: 'チーム開発', description: 'チームで開発したもの', link: '/team-dev' },
  { title: '細かいプログラム', description: 'ちょっとしたプログラムやアプリ', link: '/small-program' },
  { title: 'テスト系のプログラム', description: '開発等で使うために試しに書いたプログラム', link: '/test-program' },
];

const Home = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <Link to={project.link} className="text-blue-500 hover:underline">View Projects</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
