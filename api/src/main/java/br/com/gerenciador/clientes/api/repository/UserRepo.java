package br.com.gerenciador.clientes.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gerenciador.clientes.api.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
  // User finByEmail(String email);
}
