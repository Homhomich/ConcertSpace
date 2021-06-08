package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;


@Component
public class SendEmail {

    @Autowired
    private JavaMailSender javaMailSender;

    public void send(String userEmail, String text, String subject, InputStreamSource iss) {
        try {
            //SimpleMailMessage message = new SimpleMailMessage();

            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, true, "utf-8");

            helper.setText(text, true);
            helper.setTo(userEmail);
            helper.setSubject(subject);
            helper.setFrom("concertspace2021@gmail.com");
            FileSystemResource resource = new FileSystemResource(new File("src/main/resources/file/ticket.pdf"));

            helper.addAttachment("ticket.pdf", resource);
            javaMailSender.send(mimeMessage);
        }
        catch (MessagingException e){
            throw new IllegalStateException("failed to send email");
        }
    }

    public void sendAttach(String userEmail, String text, String subject){
        try {
            File initialFile = new File("src/main/resources/file/ticket.pdf");
            InputStream targetStream = new FileInputStream(initialFile);
            InputStreamSource attachment = new InputStreamResource(targetStream);
            send(userEmail, text, subject, attachment);
        } catch (IOException | MailException e) {
            System.out.println(e.getMessage());
        }
    }
}
