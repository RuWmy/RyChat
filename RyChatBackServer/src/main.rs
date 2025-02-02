use std::fmt::Display;

fn main() {
    let s=add(3,5);
    let str= format!("{}",s);
    let post=Sef{title:"sdf".to_string()};
    post.send();
    print!("{}",str);
}
fn add<T:std::ops::Add<Output=T>>(a:T,b:T)->T{
    a+b
}
fn create_add_print<T>() where  T:From<i32>+Display{
    let a:T=100.into();
    print!("a is :{}",a)
}
pub trait Summary {
    fn summarize(&self)->String;
}
pub struct  Post{
    pub title:String,
    pub author:String,

}
impl Summary for Post {
    fn summarize(&self)->String {
        format!("文章{}",self.title)
    }
}
pub struct Sef{
    pub title:String
}
pub trait Sed{
    fn send(&self)->String{
        String::from("(Read more...)")
    }
}
impl Sed for Sef{
    fn send(&self)->String {
        return "setgf".to_string();
    }
} 
pub fn notify<T:Sed>(item:&T){
    pub fn notify<T:Summary+Display>(item:&T){
        
    }
}
