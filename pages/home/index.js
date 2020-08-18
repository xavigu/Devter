import AppLayout from "components/AppLayout";

export default function HomePage(params) {
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section></section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: fixed;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
        }

        section {
          padding-top: 100px;
        }

        nav {
          border-top: 1px solid #ccc;
          height: 49px;
          bottom: 0;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
}
