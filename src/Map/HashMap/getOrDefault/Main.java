package Map.HashMap.getOrDefault;

import Map.HashMap.Student;

import java.util.HashMap;
import java.util.Map;

/*
To retrieve the value associated with a given key in a HashMap.
If the key is not present in the map, it returns a default value instead of null.
*/

public class Main {
    public static void main(String[] args) {
        Map<Integer, Student> map = new HashMap<>();
        map.put(1, new Student("Zach"));
        map.put(2, new Student("Ann"));
        map.put(3, new Student("Tim"));


        System.out.println(map.getOrDefault(9,  new Student("Edwin")).getName());

    }
}
