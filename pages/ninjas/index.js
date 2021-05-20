import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
// function to  get data and inject into our template to be used in build time
export const getStaticProps = async () => {
  //get data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  //return an object whose property is props, which takes in an object that has different properties and values that you want to make accessible to your component as a prop
  return {
    // this makes the data available to us in the coponent below as a prop
    props: { ninjas: data },
  };
};

//destructure the props to access the data
const Test = ({ ninjas }) => (
  <div>
    <h1>All Ninjas</h1>

    {ninjas.map((ninja) => (
      <Link href={"/ninjas/" + ninja.id} key="ninja.id">
        <a className={styles.single}>
          <h3>{ninja.name}</h3>
        </a>
      </Link>
    ))}
  </div>
);

export default Test;
