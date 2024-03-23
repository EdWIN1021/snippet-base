package Map.HashMap.entrySet;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, String> hash_map = new HashMap<Integer, String>();

        hash_map.put(20, "Geeks");
        hash_map.put(15, "Welcomes");
        hash_map.put(30, "You");

        System.out.println("Initial Mappings are: " + hash_map);

        System.out.println("The set is: " + hash_map.entrySet());
    }
}
