package Method_Reference;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.function.*;

class PlainOld {
    private static int last_id = 1;

    private int id;

    public PlainOld(){
        id = PlainOld.last_id++;
        System.out.println("Creating a PlainOld Object: id = " + id);
    }
}

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("Anna", "Bob", "Chuck", "Dave"));
        list.forEach(System.out::println);

        caculator(Integer::sum, 10, 23);
        caculator(Double::sum, 10.1, 23.2);

        // Supplier<PlainOld> reference1 = () -> new PlainOld();
        Supplier<PlainOld> reference1 = PlainOld::new;
        PlainOld newPojo = reference1.get();

        System.out.println("Getting Array");

        PlainOld[] pojo1 = seedArray(PlainOld::new, 10);


        System.out.println("--------");
        BinaryOperator<String> b1 = String::concat;
        System.out.println(b1.apply("Hello",", World"));

        System.out.println("---------");

        String name = "Tim";
        Function<String, String> uCase = String::toUpperCase;
        System.out.println(uCase.apply(name));

        Function<String, String> lastName = s -> s.concat(" Buchalka");
        Function<String, String> uCaseLastName = uCase.andThen(lastName);
        System.out.println(uCaseLastName.apply(name));

        // opposite of the andThan method actually
        uCaseLastName = uCase.compose(lastName);
        System.out.println(uCaseLastName.apply(name));

        Function<String, String[]> f0 = uCase.andThen(s -> s.concat(" Buchalka")).andThen(s -> s.split(" "));
        System.out.println(Arrays.toString(f0.apply(name)));

        Function<String, String> f1 = uCase
                .andThen(s -> s.concat(" Buchalka"))
                .andThen(s -> s.split(" "))
                .andThen(s -> s[1].toUpperCase() + ", " + s[0]);

        System.out.println(f1.apply(name));

        Function<String, Integer> f2 = uCase
                .andThen(s -> s.concat(" Buchalka"))
                .andThen(s -> s.split(" "))
                .andThen(s -> String.join(", ", s)).andThen(String::length);

        System.out.println(f2.apply(name));

        String [] names ={"Ann", "Bob", "Carol"};
        Consumer<String> s0 = s -> System.out.print(s.charAt(0));
        Consumer<String> s1 = System.out::println;
        Arrays.asList(names).forEach(s0.andThen(s -> System.out.print(" - ")).andThen(s1));

        Predicate<String> p1 = s -> s.equals("TIM");
        Predicate<String> p2 = s -> s.equalsIgnoreCase("Tim");
        Predicate<String> p3 = s -> s.startsWith("T");
        Predicate<String> p4 = s -> s.endsWith("e");

        Predicate<String> combined1 = p1.or(p2);
        System.out.println("combined1 = " + combined1.test(name));

        Predicate<String> combined2 = p3.or(p4);
        System.out.println("combined2 = " + combined2.test(name));

        Predicate<String> combined3 = p3.or(p4).negate();
        System.out.println("combined2 = " + combined3.test(name));


        record Person (String firstName, String lastName){}
        List<Person> people = new ArrayList<>(Arrays.asList(
                new Person("Peter", "pan"),
                new Person("Peter", "PumpkinEater"),
                new Person("Minnie", "Mouse"),
                new Person("Mickey", "Mouse")
        ));

        people.sort((o1, o2) -> o1.lastName.compareTo(o2.lastName));
        people.forEach(System.out::println);

        System.out.println("------------");
        people.sort(Comparator.comparing(Person::lastName));
        people.forEach(System.out::println);

        System.out.println("------------");
        people.sort(Comparator.comparing(Person::lastName).thenComparing(Person::firstName).reversed());
        people.forEach(System.out::println);

    }

    private static <T> void caculator(BinaryOperator<T> function, T value1, T value2){
        T result = function.apply(value1, value2);
        System.out.println("Result of operation: " + result);
    }

    private static PlainOld[] seedArray(Supplier<PlainOld> reference, int count){
        PlainOld[] array = new PlainOld[count];

        Arrays.setAll(array, i -> reference.get());

        return  array;
    }
}
