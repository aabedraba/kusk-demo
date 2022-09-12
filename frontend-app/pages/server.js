const ServerRendered = (props) => {
  return <div>{props.message}</div>
}

export const getServerSideProps = () => {
  return {
    props: {
      message: "Server side rendered"
    }
  }
}

export default ServerRendered; 