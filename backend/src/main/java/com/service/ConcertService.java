package com.service;

import com.config.SendEmail;
import com.dto.ConcertDTO;
import com.dto.ConcertOrganizationDTO;
import com.dto.TicketSettingsDTO;
import com.itextpdf.io.font.PdfEncodings;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.color.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.border.Border;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.property.TextAlignment;
import com.itextpdf.layout.property.VerticalAlignment;
import com.model.*;
import com.repository.ConcertRepository;
import org.jboss.logging.Logger;
import org.krysalis.barcode4j.impl.upcean.EAN13Bean;
import org.krysalis.barcode4j.output.bitmap.BitmapCanvasProvider;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConcertService {

    private Logger log = Logger.getLogger(this.getClass());
    private final SimpleDateFormat format = new SimpleDateFormat("dd MMM");

    private ConcertRepository repository;
    private ConcertOrganizationService concertOrganizationService;
    private TicketSettingsService ticketSettingsService;
    private SendEmail sendEmail;

    public ConcertService(ConcertRepository repository, ConcertOrganizationService concertOrganizationService, TicketSettingsService ticketSettingsService, SendEmail sendEmail) {
        this.repository = repository;
        this.concertOrganizationService = concertOrganizationService;
        this.ticketSettingsService = ticketSettingsService;
        this.sendEmail = sendEmail;
    }

    public Concert getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    public List<Concert> findAll() {
        return repository.findAll();
    }

    public List<Concert> findAllByNameOrLocationOrArtist(String string) {
        return repository.findConcertsByConcertNameContainsOrVenue_LocationContainsOrArtist_ArtistNameContains(string,string,string);
    }

    public Concert save(Concert concert) {
        return repository.save(concert);
    }

    public Concert createConcertFromDTO(ConcertDTO concertDTO, Artist artist, Venue venue, ConcertOrganizationDTO organizationDTO, List<TicketSettingsDTO> ticketSettingsDTO){
        log.info("creating user from DTO " + concertDTO.toString());
        Concert concert = new Concert();
        concert.setConcertName(concertDTO.getName());
        concert.setDescription(concertDTO.getDescription());
        concert.setDate(concertDTO.getDate());
        concert.setArtist(artist);
        concert.setImgPath(concertDTO.getImgPath());
        concert.setConcertOrganization(concertOrganizationService.save(new ConcertOrganization(organizationDTO)));
        concert.setVenue(venue);
        concert.setTicketSettings(ticketSettingsService.saveAll(ticketSettingsDTO));
        log.info("concert saved " + save(concert).toString());
        return concert;
    }

    public List<TicketSettingsDTO> getTypeOfTickets(Concert concert){
        List<TicketSettingsDTO> dtoList = new ArrayList<>();
        for (TicketSettings ts: concert.getTicketSettings()) {
            dtoList.add(new TicketSettingsDTO(ts));
        }
        return dtoList;
    }

    public void sendEmailForUser(Ticket ticket, User user) throws Exception {
        Concert concert = ticket.getConcert();
        TicketSettings ts = ticket.getTicket_settings();
        String text = String.format(
                "Привет, %s! \n" +
                        "Вот твой билет!\n",
                user.getFirstName());
        String s1 = format.format(concert.getDate());
        String s2 = concert.getVenue().getVenueName() + ", " + concert.getVenue().getLocation();
        String s3 = concert.getArtist().getArtistName();
        String s4 = String.valueOf(ts.getPrice());
        String s5 = ts.getType();
        String s6 = user.getFirstName() + " " + user.getLastName();

        PdfWriter writer = new PdfWriter("src/main/resources/file/ticket.pdf");
        PdfDocument pdfDoc = new PdfDocument(writer);
        pdfDoc.addNewPage();
        Document document = new Document(pdfDoc);
        String FONT_FILENAME = "src/main/resources/file/7454.ttf";
        PdfFont font = PdfFontFactory.createFont(FONT_FILENAME, PdfEncodings.IDENTITY_H);
        document.setFont(font);



        pdfDoc.setDefaultPageSize(PageSize.B6);
        float[] colWidth = {450f, 110f};
        Table header = new Table(colWidth);
        header.setBackgroundColor(new DeviceRgb(255,200,200));
        header.addCell(new Cell().add("ConcertSpace")
                .setVerticalAlignment(VerticalAlignment.MIDDLE)
                .setTextAlignment(TextAlignment.CENTER)
                .setMarginTop(30f)
                .setMarginBottom(30f)
                .setFontSize(30f)
                .setBorder(Border.NO_BORDER)
        );
        String imgPath = "src/main/resources/file/logo.jpg";
        ImageData imageData = ImageDataFactory.create(imgPath);
        header.addCell(new Cell().add(new Image(imageData))
            .setTextAlignment(TextAlignment.RIGHT)
                .setVerticalAlignment(VerticalAlignment.MIDDLE)
                .setBorder(Border.NO_BORDER));
        document.add(header);

        colWidth = new float[]{80, 300, 100, 80};
        Table concertTable = new Table(colWidth);
        concertTable.addCell(new Cell(0,4).add(s3)
            .setBold()
                .setVerticalAlignment(VerticalAlignment.MIDDLE)
                .setTextAlignment(TextAlignment.CENTER)
                .setFontSize(24f)
                .setBorder(Border.NO_BORDER));
        concertTable.addCell(new Cell().add(s1)
                .setBorder(Border.NO_BORDER)
                .setItalic());
        concertTable.addCell(new Cell().add(s2)
                .setBorder(Border.NO_BORDER)
                .setItalic());
        concertTable.addCell(new Cell().add(s5)
                .setTextAlignment(TextAlignment.RIGHT)
                .setBorder(Border.NO_BORDER)
                .setItalic());
        concertTable.addCell(new Cell().add(s4)
                .setTextAlignment(TextAlignment.RIGHT)
                .setBorder(Border.NO_BORDER)
                .setItalic());
        document.add(concertTable);


        colWidth = new float[]{460, 100};
        Table userTable = new Table(colWidth);
        userTable.setBackgroundColor(new DeviceRgb(255,200,200));
        userTable.addCell(new Cell().add(s6)
                .setBorder(Border.NO_BORDER)
                .setVerticalAlignment(VerticalAlignment.BOTTOM));
        ImageData imageData1 = ImageDataFactory.create(generateEAN13BarcodeImage("1234567890128"));
        userTable.addCell(new Cell().add(new Image(imageData1)).setBorder(Border.NO_BORDER));
        document.add(userTable);
        document.close();


        sendEmail.sendAttach(user.getEmail(), text, concert.getConcertName());

    }

    public String generateEAN13BarcodeImage(String barcodeText) throws Exception {
        EAN13Bean barcodeGenerator = new EAN13Bean();
        BitmapCanvasProvider canvas =
                new BitmapCanvasProvider(80, BufferedImage.TYPE_BYTE_BINARY, false, 0);
        barcodeGenerator.generateBarcode(canvas, barcodeText);
        String filePath = "src/main/resources/file/code.jpg";
        File outputfile = new File(filePath);
        ImageIO.write(canvas.getBufferedImage(), "jpg", outputfile);
        return filePath;
    }
}