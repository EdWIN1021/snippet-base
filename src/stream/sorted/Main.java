package stream.sorted;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(2, 4, 1, 3, 5, 6, 9, 8, 7, 10));
        // drop all numbers > 5
        numbers.stream()
                .sorted()
                .forEach(num -> System.out.printf("%d ", num));
    }
}
