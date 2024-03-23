package Map.HashMap.computeIfAbsent;

import Map.HashMap.Student;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Integer, Student> map = new HashMap<>();
        map.put(1, new Student("Zach"));
        map.put(2, new Student("Ann"));
        map.put(3, new Student("Tim"));

        map.computeIfAbsent(4, k -> new Student("Edwin"));


        System.out.println(map.get(4).getName());
    }
}
