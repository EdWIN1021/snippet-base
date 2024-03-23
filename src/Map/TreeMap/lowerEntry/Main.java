package Map.TreeMap.lowerEntry;

import java.util.NavigableMap;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {

        // Creating a TreeMap
        NavigableMap<Integer, String> treeMap = new TreeMap<>();

        treeMap.put(1, "One");
        treeMap.put(2, "Two");
        treeMap.put(3, "Three");
        treeMap.put(4, "Four");
        treeMap.put(5, "Five");

        System.out.println(treeMap.lowerEntry(3));


    }
}
