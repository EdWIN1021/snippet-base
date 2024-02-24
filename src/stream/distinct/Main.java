package stream.distinct;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 2, 2, 2, 6, 7, 7, 7, 10));

        numbers.stream()
                .distinct()
                .forEach(num -> System.out.printf("%d ", num));
    }
}
