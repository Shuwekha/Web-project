package mybackend.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import mybackend.model.Cake;

import java.util.List;

@RestController
@RequestMapping("/api/cakes")
public class CakeController {

    @Autowired
    private CakeRepository cakeRepository;

    @GetMapping
    public List<Cake> getAllCakes() {
        return cakeRepository.findAll();
    }

    @PostMapping
    public Cake createCake(@RequestBody Cake cake) {
        return cakeRepository.save(cake);
    }
}
