package br.com.gerenciador.clientes.api.controllers;

import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.gerenciador.clientes.api.model.Client;
import br.com.gerenciador.clientes.api.repository.ClientRepo;

@RestController
@CrossOrigin(origins = "*")
public class ClientController {
  
  @Autowired
  private ClientRepo repo;

  @PostMapping("/clients")
  public Client create(@RequestBody Client c) {
    return repo.save(c);
  }

  @GetMapping("/clients")
  public Iterable<Client> list() {
    return repo.findAll();
  }

  @GetMapping("/clients/{id}")
  public Client search(@PathVariable long id) {
    return repo.findById(id).get();
  }

  @GetMapping("/clients/sorted")
  public Iterable<Client> sortedList(@RequestParam String column, @RequestParam String direction) {
    Sort sort = Sort.by(Sort.Direction.fromString(direction), column);
    return repo.findAll(sort);
  }

  @PutMapping("/clients")
  public Client edit(@RequestBody Client c) {
    return repo.save(c);
  }

  @DeleteMapping("/clients/{id}")
  public void delete(@PathVariable long codigo) {
    repo.deleteById(codigo);
  }

}

