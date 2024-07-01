OOPs
----
In programming, "oops" typically refers to "Object-Oriented Programming" (OOP). Object-Oriented Programming is a programming paradigm based on the concept of "objects," which can contain data (attributes or properties) and code (methods or functions). It allows programmers to create reusable and modular code by organizing it into objects that interact with each other.

class
objects

constructor
-----------
it is used to initialize an object. Note that the constructor name must match the class name, and it cannot have a return type (like void or int).Also note that the constructor is called when the object is created.
All classes have constructors by default: if you do not create a class constructor yourself, C# creates one for you. However, then you are not able to set initial values for fields.
Constructors save time! Take a look at the last example on this page to really understand why.
Tip: Just like other methods, constructors can be overloaded by using different numbers of parameters.
A class can have multiple constructors that differ in the number and/or type of their parameters.    

Access Modifiers
-------------------
Modifier	Description
public	    The code is accessible for all classes
private	    The code is only accessible within the same class
protected   The code is accessible within the same class, or in a class that is inherited from that class. You will learn more about inheritance in a later chapter
internal	  The code is only accessible within its own assembly, but not from another assembly. You will learn more about this in a later chapter
There's also two combinations: protected internal and private protected.

Note: By default, all members of a class are private if you don't specify an access modifier:

Properties and Encapsulation
----------------------------
get and set property

class Person
{
  private string name; // field
  public string Name   // property
  {
    get { return name; }
    set { name = value; }
  }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Person
{
  public string Name  // property
  { get; set; }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Why Encapsulation?
--------------------
Better control of class members (reduce the possibility of yourself (or others) to mess up the code)
Fields can be made read-only (if you only use the get method), or write-only (if you only use the set method)
Flexible: the programmer can change one part of the code without affecting other parts
Increased security of data

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Inheritance (we can not achieve multiple inheritance in C#) --- If you don't want other classes to inherit from a class, use the sealed keyword:
-----------------------------------------------------------------
Derived Class (child) - the class that inherits from another class
Base Class (parent) - the class being inherited from

https://www.w3schools.com/cs/cs_inheritance.php

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Polymorphism
------------
Inheritance lets us inherit fields and methods from another class. Polymorphism uses those methods to perform different tasks. This allows us to perform a single action in different ways.

method overloading
method overriding

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Abstraction
-----------
Data abstraction is the process of hiding certain details and showing only essential information to the user.
Abstraction can be achieved with either abstract classes or interfaces (which you will learn more about in the next chapter).

The abstract keyword is used for classes and methods:

Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).

Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from).

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Interfaces
----------
An interface is a completely "abstract class", which can only contain abstract methods and properties (with empty bodies)

interface IAnimal 
{
  void animalSound(); // interface method (does not have a body)
  void run(); // interface method (does not have a body)
}



Notes on Interfaces:
Like abstract classes, interfaces cannot be used to create objects (in the example above, it is not possible to create an "IAnimal" object in the Program class)
Interface methods do not have a body - the body is provided by the "implement" class
On implementation of an interface, you must override all of its methods
Interfaces can contain properties and methods, but not fields/variables
Interface members are by default abstract and public
An interface cannot contain a constructor (as it cannot be used to create objects)
Why And When To Use Interfaces?
1) To achieve security - hide certain details and only show the important details of an object (interface).

2) C# does not support "multiple inheritance" (a class can only inherit from one base class). However, it can be achieved with interfaces, because the class can implement multiple interfaces. Note: To implement multiple interfaces, separate them with a comma (see example below).



