package com.example.demo2.entity;

public class Item {
    
    private Integer itemid;
    private String name;
    private Float rate;

    public Item(Integer itemid, String name, Float rate)
    {
        this.itemid=itemid;
        this.name=name;
        this.rate=rate;
    }

    public Integer getItemid() {
        return itemid;
    }

    public void setItemid(Integer itemid) {
        this.itemid = itemid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }

    

}
