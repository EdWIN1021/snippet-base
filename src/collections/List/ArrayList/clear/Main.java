package collections.List.ArrayList.clear;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Integer [] arr = {1,2,3,4,5};
        List<Integer> list = new ArrayList<>(List.of(arr));
        list.clear();

        System.out.println(list);
    }
}
