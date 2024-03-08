package Comparable;

public class Main {
    public static void main(String[] args) {
        Integer five = 5;
        Integer [] other = {0 ,5, 10, -50, 50};

        for (Integer i : other){
            int val = five.compareTo(i);
            System.out.printf("%d %s %d: compareTo=%d%n", five, (val == 0 ? "==" : (val < 0) ? "<" : ">"), i, val);
        }

        // -------------------
        System.out.println();

        String banana = "banana";
        String[] fruit = {"apple", "banana", "pear", "BANANA"};

        for (String s : fruit){
            int val = banana.compareTo(s);
            System.out.printf("%s %s %s: compareTo=%d%n", banana, (val == 0 ? "==" : (val < 0) ? "<" : ">"), s, val);
        }

        // -------------------
        System.out.println();

        Student tim = new Student("Tim");
        Student [] students = {
                new Student("Zach"),
                new Student("Tim"),
                new Student("Ann")
        };

        for(Student s : students) {
            int val = tim.compareTo(s);
            System.out.printf("%s %s %s: compareTo=%d%n", tim.getName(), (val == 0 ? "==" : (val < 0) ? "<" : ">"), s.getName(), val);
        }
    }
}
