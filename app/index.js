import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '@/components/Login';

export default function Page() {
	return (
		<SafeAreaView>
			<Text>Home asdgasdgafg page</Text>
			<Link href="(tabs)">go to the tabs</Link>
			<Login />
			<Link className='text-3xl' href="signup">let signup</Link>
		</SafeAreaView>
	);
}
