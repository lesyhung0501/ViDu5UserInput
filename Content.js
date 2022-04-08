import { Text, View } from 'react-native';

function Content(props) {
    return (
        <View>
            <Text style={{fontSize: '20px', fontWeight: 'bold', color: 'red'}}>Your name is {props.name}</Text>
            <Text style={{fontSize: '20px', fontWeight: 'bold', color: 'red'}}>Your phone is {props.phone}</Text>
        </View>
    )
}

export default Content;
