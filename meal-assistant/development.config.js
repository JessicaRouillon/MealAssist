module.exports = {
    expo: {
      name: 'meal-assistant',
      slug: 'meal-assistant',
      sdkVersion: '10.9.2', // Replace with current Expo SDK version
      platforms: ['ios', 'android'],
      extra: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      },
    },
  };
  