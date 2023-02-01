import { APIKEY, APPURL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { setupURLPolyfill } from "react-native-url-polyfill";

setupURLPolyfill();

const supabase = createClient(`${APPURL}`, `${APIKEY}`, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
});

export default supabase;
