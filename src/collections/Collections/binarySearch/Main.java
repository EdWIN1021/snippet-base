package collections.Collections.binarySearch;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> sourceList = new ArrayList<String>(List.of("a","b","c","d"));

        System.out.println(Collections.binarySearch(sourceList,"b"));
    }
}
