package collections.List.LinkedList.poll;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "e"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        String top = list.poll();

        System.out.println(top);
        System.out.println(list);
    }
}
