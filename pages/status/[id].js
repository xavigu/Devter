import Devit from "components/Devit";

export default function DevitPage(props) {
  console.log(props);
  return (
    <>
      <Devit {...props} />
      <style jsx>{``}</style>
    </>
  );
}

// se ejecuta en el servidor y rehidrata la página recogiendo como props lo que le devuelve este método
export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiRes = await fetch(`http://localhost:3000/api/devits/${id}`);
  if (apiRes.ok) {
    const props = await apiRes.json();
    return { props }; // return {props: props}
  }
  if (res) {
    console.log("res", res);
    res.writeHead(301, { Location: "/home" }).end();
  }
}
