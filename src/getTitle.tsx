type GetTitleProps = {
    header: string,
}
const App = (props: GetTitleProps) => {
    const { header } = props;
    console.log('header');
  return (
        <div>
            <h1>{header}</h1>
        </div>
  );
}

export default App;