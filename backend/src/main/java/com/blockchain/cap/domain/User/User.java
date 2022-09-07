package com.blockchain.cap.domain.User;

import com.blockchain.cap.domain.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="USER_TABLE")
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="user_id", insertable=false, updatable=false) // 기본키는 변경될 일이 없으므로 읽기전용 설정
    private long id;

    @Column(nullable=false)
    private String password;
    @Column(nullable=false)
    private String phone;
    @Column(nullable=false)
    private String wallet;
}
