package com.example.demo2.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo2.entity.Item;

//CRUD - Create, Retrieve, Update,     Delete
///      POST    GET       PUT/PATCH   DELETE

@RestController
public class ItemController {

    private List<Item> items=new ArrayList<>();
    
    // @ResponseBody
    @GetMapping("/getitem")
    public Item getItem(Integer id)
    {
        return items.stream().filter((i)->i.getItemid()==id).findFirst().orElseThrow();
    }

    @GetMapping("/getallitems")
    public List<Item> getAllItems()
    {
        return items;
    }

    @PostMapping("/additem")
    public Item addItem(@RequestBody Item i)
    {
        this.items.add(i);
        return i;   
    }

    @PutMapping("/edititem")
    public Item editItem(@RequestBody Item i)
    {
        int itemid=i.getItemid();        
        // return items.stream().filter((i)->i.getItemid()==id).findFirst().orElseThrow();
        Item item=getItem(itemid);
        item.setName(i.getName());
        item.setRate(i.getRate());

        return item;
    }

    @DeleteMapping("/deleteitem")
    public boolean deleteItem(Integer id)
    {
        Item item=getItem(id);
        this.items.remove(item);
        return true;
    }

}
