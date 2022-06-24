import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';
function App() {
    const number = 5;

    const counterProps = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        initialValue: 5,
    };
    return (
        <Container>
            <div className="App">
                <MyHeader />
                <Counter {...counterProps} />
            </div>
        </Container>
    );
}

export default App;
