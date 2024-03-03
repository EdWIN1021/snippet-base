package classes.polymorphism;

public class Main {
    public static void main(String[] args) {
        Movie theMovie = Movie.getMovie("Science", "Star Wars");
        theMovie.watchMovie();

        // Casting with classes
        Adventure jaws = (Adventure) Movie.getMovie("A", "Jaws");
        jaws.watchMovie();

        Object comedy = Movie.getMovie("C", "Airplane");
        Comedy comedyMovie = (Comedy) comedy;
        comedyMovie.watchComedy();

        var airplane  = Movie.getMovie("C", "Airplane");
        airplane.watchMovie();

        var plane = new Comedy("Airplane");
        plane.watchComedy();
    }
}
