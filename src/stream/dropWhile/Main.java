package stream.dropWhile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // drop all the numbers < 5
        list.stream()
                .dropWhile(num -> num < 5 )
                .forEach(System.out::println);
    }
}
