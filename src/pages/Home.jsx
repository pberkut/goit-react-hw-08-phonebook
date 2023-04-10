const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  desc: {
    color: 'tomato',
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p style={styles.desc}>Login or register for use Phonebook</p>
      </div>
    </>
  );
}
