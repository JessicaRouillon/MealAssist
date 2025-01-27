import React, { useState } from 'react'; // useState: used to store the email, password, and error messages
import { View, TextInput, Button, Text } from 'react-native'; // UI components from React Native
import { supabase } from '../api/supabase';

export default function LoginScreen()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () =>
    {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
        else setError('');
    };

    return (
        <View>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry // obscur the password
            />
            <Button title="Login" onPress={handleLogin} />
            {error ? <Text>{error}</Text> : null}
        </View>
    );
}