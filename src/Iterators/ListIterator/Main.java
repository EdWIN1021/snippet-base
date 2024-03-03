package Iterators.ListIterator;

import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>(List.of(1,2,3,4,5));
        ListIterator<Integer> iterator = list.listIterator();

        while(iterator.hasNext()){
            var num = iterator.next();
            if (num == 3) {
                iterator.remove();
            }
            System.out.print(num + ", ");
        }

        System.out.println();

        while (iterator.hasPrevious()){
            System.out.print(iterator.previous() + ", ");
        }
    }
}
