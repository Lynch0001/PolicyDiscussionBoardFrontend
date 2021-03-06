package com.lynch.dboard.repository;

import com.lynch.dboard.domain.Discussion;
import com.lynch.dboard.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscussionRepository extends JpaRepository<Discussion, Long> {

  public List<Discussion> getAllByTagsContaining(Tag tag);
}
