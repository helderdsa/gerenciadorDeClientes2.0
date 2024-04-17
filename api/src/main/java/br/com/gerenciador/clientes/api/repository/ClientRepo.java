package br.com.gerenciador.clientes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gerenciador.clientes.api.model.Client;

public interface ClientRepo extends JpaRepository<Client, Long>{
  
}
